import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTool } from '../../redux/actions/toolsActions'
import moment from 'moment'

import GoButton from '../UI/GoButton'
import Spinner from '../UI/Spinner'
import PhotoCarousel from '../UI/PhotoCarousel'

const ToolView = ({ getTool, match, toolsReducer: { tool } }) => {
  useEffect(() => {
    getTool(match.params.id)
  }, [getTool, match.params.id])

  const [formState, setFormState] = useState(true)
  let [message, setMessage] = useState({
    name: '',
    email: '',
    text: '',
  })

  const style = {
    shiftRight: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '10px 0',
    },
    inputShadow: {
      //   borderBottom: '2px solid black',
      boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0), 0px 0px 10px -7px #000000',
      border: 'none',
      outline: 'none',
      resize: 'vertical',
    },
  }

  let textChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value })
  }

  return (
    <Fragment>
      {tool === null ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="tool-view-main">
            <div className="tool-view-rowSpan ma-1">
              <GoButton icon="fas fa-arrow-circle-left" name="Go Back" />
            </div>
            <div className="tool-view-imageContainer">
              {formState ? (
                <Fragment>
                  <h2 style={{ margin: '10px' }}>Contact Form</h2>
                  <form
                    style={{ display: 'flex', flexDirection: 'column' }}
                    action=""
                  >
                    <label>Your Name: </label>
                    <input
                      name="name"
                      style={style.inputShadow}
                      type="text"
                      value={message.name}
                      required
                      onChange={(e) => textChange(e)}
                    />

                    <label>Your Email: </label>
                    <input
                      name="email"
                      style={style.inputShadow}
                      type="text"
                      onChange={(e) => textChange(e)}
                      value={message.email}
                      required
                    />

                    <label>Your Message: </label>
                    <textarea
                      style={style.inputShadow}
                      onChange={(e) => textChange(e)}
                      value={message.text}
                      name="text"
                      id=""
                      cols="30"
                      rows="8"
                      required
                    ></textarea>

                    <button className="btn" type="submit">
                      Send
                    </button>
                  </form>
                </Fragment>
              ) : (
                <PhotoCarousel photos={tool.photos} />
              )}
            </div>
            <div className="tool-view-descContainer">
              <h1 className="ma-1">{tool.title}</h1>
              <small className="tool-view-fjustify">
                <i className="far fa-calendar-alt"></i>
                &nbsp;{moment(tool.postDate).startOf('hour').fromNow()}{' '}
                &nbsp;&nbsp;
                <i className="fas fa-eye"></i>&nbsp;{tool.views}
              </small>

              <div style={style.shiftRight}>
                <button
                  className="btn green"
                  onClick={() => setFormState(!formState)}
                >
                  {!formState ? 'Contact seller' : 'View Photos'}
                </button>{' '}
                <h2>Buy ${tool.price} CAD</h2>
              </div>

              {tool.rent && <h2>Rent ${tool.rent} CAD</h2>}
              <div>
                <h2>Description</h2>
                <p>{tool.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

ToolView.propTypes = {
  getTool: PropTypes.func.isRequired,
  toolsReducer: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  toolsReducer: state.toolsReducer,
})

export default connect(mapStateToProps, { getTool })(ToolView)
