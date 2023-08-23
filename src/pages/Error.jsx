import React from 'react';

// const ErrorPage = styled.div`
//   @import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500);

//   body {
//     color: #fff;
//     font-size: 100%;
//     line-height: 1.5;
//     font-family: "Roboto", sans-serif;
//   }

//   .error-page__button {
//     font-weight: 300;
//     color: #fff;
//     font-size: 1.2em;
//     text-decoration: none;
//     border: 1px solid #efefef;
//     padding: .5em;
//     border-radius: 3px;
//     float: left;
//     margin: 6em 0 0 -155px;
//     left: 50%;
//     position: relative;
//     transition: all .3s linear;
//   }

//   .error-page__button:hover {
//     background-color: #007aff;
//     color: #fff;
//   }

//   .error-page__title{
//     font-size: 2em;
//     text-align: center;
//     font-weight: 100;
//   }

//   .error-page__content{
//     text-align: center;
//     font-size: 15em;
//     font-weight: 100;
//   }
// `
export default function Error() {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__content">Sorry... 관리자 현석팀</p>
      <a className="error-page__button" href="#">
        <i className="icon-home"></i>
        현석팀에게 문의하세요 010-
      </a>
    </div>
  );
}
