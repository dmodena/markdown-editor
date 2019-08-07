'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const Files = ({ files, handleOpenFile }) => (
  <div className="files-list-container">
    <h2>Files</h2>
    <ul>
      {Object.keys(files).map(fileId => (
        <li key={fileId}>
          <button onClick={handleOpenFile(fileId)}>
            {files[fileId].title}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Files.propTypes = {};

export default Files;
