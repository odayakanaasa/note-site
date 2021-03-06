import React from "react"
import "../less/component/go-top.less"

export default class GoTop extends React.Component {
  constructor() {
    super()
    this.scrollTarget = this.getScrollTarget()
    this.offsetTop = 150
    this.state = {}
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  }

  getScrollTarget = () => {
    if (typeof document !== `undefined`) {
      return document.scrollingElement || document.documentElement
    }
  }

  onScroll = () => {
    this.setState({show: this.scrollTarget.scrollTop > this.offsetTop})
  }

  onClick = () => {
    this.scrollUpBaseTime(100, 60)
  }

  scrollUpBaseTime = (ms, refreshRate) => {
    let stepSize = this.scrollTarget.scrollTop / refreshRate
    this.scrollUp(stepSize, ms / refreshRate)
  }

  scrollUp = (size, ms) => {
    let nextScrollTop = this.scrollTarget.scrollTop - size
    this.scrollTarget.scrollTop = nextScrollTop > 0 ? nextScrollTop : 0
    if (this.scrollTarget.scrollTop > 0) {
      setTimeout(this.scrollUp, ms, size, ms)
    }
  }

  render() {
    let style = this.state.show ? {} : {display: "none"}
    return (
      <div className="corner-container" style={style}>
        <button className="corner-button" type="button" onClick={this.onClick}>
          <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1
            0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523
            1.415-.58 1.415h-3.004v7.005z" />
          </svg>
        </button>
      </div>
    )
  }
}
