import React from 'react'

export default function Project(props) {
  console.log(props.item)
  return (
    <>
      <div class="row">
        <div class="col-md-7">
          <a href={props.item.videoLink} target='_blank' rel="noreferrer">
            <img class="img-fluid rounded mb-3 mb-md-0" src={props.item.img} alt="" />
          </a>
        </div>
        <div class="col-md-5">
          <h3>{props.item.projectTitle}</h3>
          <p>{props.item.projectText}</p>
          <a class="btn btn-primary" target="_blank" href={props.item.link} rel="noreferrer">{props.item.buttonText}</a>
        </div>
      </div>
      {/* <!-- /.row --> */}

      <hr />
    </>

  )
}

