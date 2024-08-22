<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_FILES['files'])) {
        $errors = [];
        $uploadedFiles = [];

        foreach ($_FILES['files']['tmp_name'] as $key => $tmp_name) {
            $fileName = $_FILES['files']['name'][$key];
            $fileTmp = $_FILES['files']['tmp_name'][$key];
            $fileSize = $_FILES['files']['size'][$key];
            $fileError = $_FILES['files']['error'][$key];
            $fileType = $_FILES['files']['type'][$key];

            $fileExt = explode('.', $fileName);
            $fileActualExt = strtolower(end($fileExt));

            $allowed = ['jpg', 'jpeg', 'png', 'pdf', 'docx', 'mp4'];

            if (in_array($fileActualExt, $allowed)) {
                if ($fileError === 0) {
                    if ($fileSize < 1000000) { // Limit file size to 1MB
                        $fileNameNew = uniqid('', true) . "." . $fileActualExt;
                        $fileDestination = 'uploads/' . $fileNameNew;
                        if (move_uploaded_file($fileTmp, $fileDestination)) {
                            $uploadedFiles[] = $fileNameNew;
                        } else {
                            $errors[] = "Failed to move file: " . $fileName;
                        }
                    } else {
                        $errors[] = "File too big: " . $fileName;
                    }
                } else {
                    $errors[] = "Error uploading file: " . $fileName;
                }
            } else {
                $errors[] = "Invalid file type: " . $fileName;
            }
        }

        if (empty($errors)) {
            echo "Files uploaded successfully!";
        } else {
            foreach ($errors as $error) {
                echo $error . "<br>";
            }
        }
    }
}
?>
