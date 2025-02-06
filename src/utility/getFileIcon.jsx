import { HiDocumentText } from "react-icons/hi";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileImage, FaFileVideo, FaFileAudio, FaFileArchive, FaFileCode, FaFile } from "react-icons/fa";

export const getFileIcon = (extension, size = 20, className = "") => {
    const fileIcons = {
        pdf: <FaFilePdf size={size} className={`text-red-500 ${className}`} />,
        doc: <FaFileWord size={size} className={`text-blue-500 ${className}`} />,
        docx: <FaFileWord size={size} className={`text-blue-500 ${className}`} />,
        xls: <FaFileExcel size={size} className={`text-green-500 ${className}`} />,
        xlsx: <FaFileExcel size={size} className={`text-green-500 ${className}`} />,
        ppt: <FaFilePowerpoint size={size} className={`text-orange-500 ${className}`} />,
        pptx: <FaFilePowerpoint size={size} className={`text-orange-500 ${className}`} />,
        jpg: <FaFileImage size={size} className={`text-yellow-500 ${className}`} />,
        jpeg: <FaFileImage size={size} className={`text-yellow-500 ${className}`} />,
        png: <FaFileImage size={size} className={`text-yellow-500 ${className}`} />,
        gif: <FaFileImage size={size} className={`text-yellow-500 ${className}`} />,
        svg: <FaFileImage size={size} className={`text-yellow-500 ${className}`} />,
        mp4: <FaFileVideo size={size} className={`text-purple-500 ${className}`} />,
        mov: <FaFileVideo size={size} className={`text-purple-500 ${className}`} />,
        avi: <FaFileVideo size={size} className={`text-purple-500 ${className}`} />,
        mp3: <FaFileAudio size={size} className={`text-blue-400 ${className}`} />,
        wav: <FaFileAudio size={size} className={`text-blue-400 ${className}`} />,
        zip: <FaFileArchive size={size} className={`text-gray-500 ${className}`} />,
        rar: <FaFileArchive size={size} className={`text-gray-500 ${className}`} />,
        tar: <FaFileArchive size={size} className={`text-gray-500 ${className}`} />,
        js: <FaFileCode size={size} className={`text-yellow-400 ${className}`} />,
        jsx: <FaFileCode size={size} className={`text-yellow-400 ${className}`} />,
        ts: <FaFileCode size={size} className={`text-blue-400 ${className}`} />,
        tsx: <FaFileCode size={size} className={`text-blue-400 ${className}`} />,
        json: <FaFileCode size={size} className={`text-green-400 ${className}`} />,
        html: <FaFileCode size={size} className={`text-orange-400 ${className}`} />,
        css: <FaFileCode size={size} className={`text-blue-300 ${className}`} />,
        txt: <HiDocumentText size={size} className={`text-gray-500 ${className}`} />
    };

    return fileIcons[extension.toLowerCase()] || <FaFile size={size} className={`text-gray-400 ${className}`} />;
};
