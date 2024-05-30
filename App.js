// App.js
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const convertFileToBase64 = async (uri) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return base64;
    } catch (error) {
      console.error('Error converting file to base64:', error);
      return null;
    }
  };
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    const base64String = await convertFileToBase64(result?.assets[0]?.uri);
    console.log(result)
    if (!!result?.assets[0]) {
      setSelectedFile(result);

      uploadDocument(result?.assets[0]);
    }
  };

  const uploadDocument = async (file) => {
    const formData = new FormData();
    formData.append('document', {
      uri: file.uri,
      name: file.name,
      type: file.mimeType || 'application/octet-stream',
    });

    try {
      const response = await fetch('http://192.168.1.145:5000/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response);
     // const responseData = await response.json();
      console.log('File uploaded successfully:', responseData);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick a Document" onPress={pickDocument} />
      {selectedFile && (
        <Text style={{ marginTop: 20 }}>
          Selected File: {selectedFile.name}
        </Text>
      )}
    </View>
  );
};

export default App;
