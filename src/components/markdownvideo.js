import React from 'react'
import video from "../videos/MarkdownViewer.mp4"

export const Markdownvideo = () => {
  return (
    <>
      <div class="containter-fluid">
        <div class="row mt-3">
          <div class="col-lg-10 col-md-10 col-sm-12 mx-auto   mt-lg-0 mt-md-3 mt-sm-3 ">
            <video src={video} width="100%" height="100%" controls="controls" autoplay="true" />
          </div>
        </div>
      </div>
    </>
  )
}
