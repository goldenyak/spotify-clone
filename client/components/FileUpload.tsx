import React, { useRef } from "react";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {

  const ref = useRef<HTMLInputElement>();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0])
  };

  return (
    <div onClick={() => ref.current.click()}>
      <input
        onChange={onChangeHandler}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
      />
      {children}
    </div>
  );
};

export default FileUpload;