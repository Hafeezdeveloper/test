import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Inpu = (props) => {
    let {label , file} = props
    return (
        <div>
            {file ? 
    <div className="file-upload-container">
    <label htmlFor="fileInput" className="labelfile custom-file-input">
      <input
        type="file"
        id="fileInput"
        className="input2"
      />
      <AttachFileIcon className="file-icon" />
    </label>
  </div>   :
<input type="text" placeholder={label} className='input' />
}
        </div>
    )
}

export default Inpu
