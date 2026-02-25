import React from 'react'

const UploadBox = ({ setFile }) => {
  return (
    <div className="border-2 border-dashed border-gray-400 p-6 md:p-10 text-center rounded-lg">
      <p className="font-semibold">
        Drag & Drop files here
      </p>
      <p className="text-sm text-gray-500">or</p>

      <input
        type="file"
        className="file-input file-input-bordered mt-4"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
  );
}

export default UploadBox