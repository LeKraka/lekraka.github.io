from datetime import datetime, timezone

now = datetime.now(timezone.utc)
timestamp = now.replace(microsecond=0).isoformat()  # e.g., 2025-07-13T09:13:30+00:00

with open("last-updated.txt", "w") as f:
    f.write(timestamp)

# ISO format for machine-readable
iso_timestamp = now.isoformat() + "Z"



print(f"✅")
