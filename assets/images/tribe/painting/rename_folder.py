import os

# Root folder where subfolders (religious, social, etc.) are stored
root_folder = r"C:\Users\Pc\Documents\GitHub\UpdateRSSM\RSSM\assets\images\tribe\painting"

# Loop through each subfolder inside the root folder
for folder_name in os.listdir(root_folder):
    subfolder_path = os.path.join(root_folder, folder_name)

    if os.path.isdir(subfolder_path):  # Ensure it's a folder
        count = 1  # Start sequence number from 1

        # Loop through each file in the subfolder
        for filename in sorted(os.listdir(subfolder_path)):  # Sorted for consistency
            old_path = os.path.join(subfolder_path, filename)

            if os.path.isfile(old_path):  # Ensure it's a file
                file_ext = os.path.splitext(filename)[1]  # Get file extension
                new_filename = f"{folder_name}{count}{file_ext}"  # Format: foldername_1.jpg
                new_path = os.path.join(subfolder_path, new_filename)

                os.rename(old_path, new_path)
                print(f"Renamed: {filename} -> {new_filename}")

                count += 1  # Increment sequence number

print("All images renamed successfully!")
