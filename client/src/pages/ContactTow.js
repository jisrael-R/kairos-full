import React from "react";
class Form extends React.Component {
  render() {
    return <div id="ff-compose"></div>;
  }
  componentDidMount(){
    var script = document.createElement("script");
    script.id = "ff-script";
    script.src = "https://formfacade.com/include/110131978778784268307/form/1FAIpQLSd92bRVwaze-7VTv722oAPmJOyPWOcFT--chaQ40QOE4mK13w/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}
export default Form;