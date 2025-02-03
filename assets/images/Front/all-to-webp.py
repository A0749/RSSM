from PIL import Image
import os

# 🔹 Set your main folder path
folder_path = r"C:\Users\Pc\Documents\GitHub\UpdateRSSM\RSSM\assets\images\Front"

# 🔹 Allowed image formats
allowed_exts = (".jpg", ".jpeg", ".png", ".bmp", ".tiff")

# 🔹 Loop through subfolders that start with "gallery"
for root, dirs, files in os.walk(folder_path):
    folder_name = os.path.basename(root)  # Get the folder's name
    if folder_name.lower().startswith("gallery"):  # ✅ Only process "gallery" subfolders
        for filename in files:
            if filename.lower().endswith(allowed_exts):  # Check if it's an image
                old_path = os.path.join(root, filename)
                new_filename = os.path.splitext(filename)[0] + ".webp"  # Keep name, change extension
                new_path = os.path.join(root, new_filename)

                try:
                    # Open image and convert to WebP
                    with Image.open(old_path) as img:
                        img.save(new_path, "WEBP", quality=85)  # Adjust quality if needed

                    # 🔴 OPTIONAL: Remove the original image after conversion
                    os.remove(old_path)

                    print(f"Converted in {folder_name}: {filename} → {new_filename}")

                except Exception as e:
                    print(f"❌ Error converting {filename} in {folder_name}: {e}")

print("✅ All images inside 'gallery' subfolders converted to WebP successfully!")
