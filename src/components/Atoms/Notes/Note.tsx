import React from 'react';
import PropTypes from 'prop-types';

export interface NoteProps {
  content: string
}

export const Note: React.FC<NoteProps> = ({ content }) => (
  <div className="bg-white shadow p-2 text-gray-400 text-xs break-words h-40">
    { content }
  </div>
);

Note.propTypes = {
  content: PropTypes.string.isRequired,
};
