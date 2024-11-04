
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { formats, modules } from '../utils/TextEditorConstant';

function TextEditor({ handleText, textValue }) {
    // const [value, setValue] = useState('');

    return (
        <>
            <label htmlFor="" className='text-black font-bold mb-[-1rem] '>Course Preview</label>
            <ReactQuill
                onChange={handleText}
                value={textValue}
                modules={modules}
                formats={formats}
                theme="snow"
            />
        </>)
}
export default TextEditor;