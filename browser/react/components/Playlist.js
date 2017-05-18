'use strict';

import React from 'react';

function Playlist (props) {
  return (
    <div>
      <h3>{ playlist.name }</h3>
      <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
      { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
      <hr />
    </div>
  )
}

export default Playlist;
