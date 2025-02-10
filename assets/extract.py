import docx
import json

def extract_text_from_docx(docx_path):
    doc = docx.Document(docx_path)
    text = []
    
    for para in doc.paragraphs:
        # Check for Hindi characters and avoid those paragraphs
        if not any([char in para.text for char in ['\u0900', '\u0901', '\u0902', '\u0903', '\u0904']]):
            text.append(para.text.strip())

    return text

def create_tribe_json(tribe_name, paragraphs):
    data = {
        "id": tribe_name,
        "title": tribe_name,
        "paragraphs": paragraphs,
        "sliderImages": []
    }
    return json.dumps(data, indent=4)

def main():
    # Path to your DOCX file
    docx_file = r'C:\Users\Pc\Documents\GitHub\UpdateRSSM\RSSM\assets\Tribes of MP.docx'  # Update the path as needed

    # Extract text from DOCX
    paragraphs = extract_text_from_docx(docx_file)
    
    tribe_data = []  # List to store all tribes' data
    tribe_name = ""
    tribe_paragraphs = []

    for para in paragraphs:
        # Detect tribe title, assuming titles are in uppercase or single-word
        if para.isupper() and len(para.split()) == 1:  # Single word in uppercase as tribe title
            # Save the previous tribe if it exists
            if tribe_name and tribe_paragraphs:
                tribe_data.append(create_tribe_json(tribe_name, tribe_paragraphs))
            
            # Start a new tribe
            tribe_name = para
            tribe_paragraphs = []  # Reset paragraphs for the new tribe
        else:
            # Add regular paragraph under the current tribe
            tribe_paragraphs.append(para)

    # Add the last tribe if there is any remaining data
    if tribe_name and tribe_paragraphs:
        tribe_data.append(create_tribe_json(tribe_name, tribe_paragraphs))

    # Output the JSON structure to a file
    output_file = r'D:\RSSM\tribe_data.json'  # Change the output path as needed
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('[' + ',\n'.join(tribe_data) + '\n]')

    print(f"Data has been extracted and saved to {output_file}")

if __name__ == "__main__":
    main()
