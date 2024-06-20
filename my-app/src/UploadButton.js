
export default function UploadButton() {
    function handleUpload() {
        return alert("Image is being uploaded.")
    }

    return (
        <button onClick={handleUpload}>Upload Image</button>
    )
}