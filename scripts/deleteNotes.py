import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import date, datetime

# Initialize Firebase app with credentials
cred = credentials.Certificate("/PathToCrendentials")
app = firebase_admin.initialize_app(cred)
db = firestore.client()

def deleteNoteFromTrash(noteID):
    # Get today's date
    dateToday = date.today()

    noteID = noteID.replace('GMT', '')

# Remove the parentheses and content inside
    noteID = noteID.split('(')[0].strip()

    # Convert noteID to a datetime object (assuming it's a Unix timestamp)
    dateOfTrashedNote = datetime.strptime(noteID, "%a %b %d %Y %H:%M:%S %z")

    # Calculate the difference between today's date and the trashed note's date
    difference = dateToday - dateOfTrashedNote.date()

    # Check if the difference is greater than 20 days
    return difference.days > 7


def main():
    # Access the 'notes' collection in Firestore
    users_ref = db.collection("notes")
    docs = users_ref.stream()

    # Iterate through the documents in the 'notes' collection
    for doc in docs:
        document = doc.to_dict()
        updatedNotesArray = []
        # Get the 'trash' field from the document
        notes = document.get('notes', False)

        # Check if 'trash' field exists and iterate through trashed notes
        if notes:
            for note in notes:
                if not note.get("markedForTrash", False):
                    updatedNotesArray.append(note)
                else:
                    if not deleteNoteFromTrash(note.get('dateWhenMarkedForTrash', False)):
                        updatedNotesArray.append(note)

        if len(updatedNotesArray) != len(notes):
            # Update the Firestore document with the updated notes
            doc.reference.update({'notes': updatedNotesArray})
            print("Document updated:", doc.id)
        else:
            print("No changes to update for document:", doc.id)



if __name__ == "__main__":
    main()
