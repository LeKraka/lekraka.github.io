from datetime import datetime, timedelta

# Get current UTC time
now = datetime.utcnow()

# ISO format for machine-readable
iso_timestamp = now.isoformat() + "Z"

# Friendly human-readable time
def human_readable(dt):
    diff = datetime.utcnow() - dt
    seconds = int(diff.total_seconds())
    minutes = seconds // 60
    hours = minutes // 60
    days = diff.days

    if seconds < 60:
        return "just now"
    elif minutes == 1:
        return "a minute ago"
    elif minutes < 60:
        return f"{minutes} minutes ago"
    elif hours == 1:
        return "an hour ago"
    elif hours < 24:
        return f"{hours} hours ago"
    elif days == 1:
        return f"yesterday at {dt.strftime('%H:%M')}"
    else:
        return f"on {dt.strftime('%Y-%m-%d at %H:%M')}"

friendly_text = human_readable(now)

# Write both to the file
with open("last-updated.txt", "w", encoding="utf-8") as f:
    f.write(iso_timestamp + "\n")
    f.write(friendly_text + "\n")

print(f"✅ Wrote to last-updated.txt:\n{iso_timestamp}\n{friendly_text}")
