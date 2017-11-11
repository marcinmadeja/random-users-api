import React, { Component } from 'react';

const users = {"results":[{"gender":"male","name":{"title":"mr","first":"clifton","last":"rogers"},"location":{"street":"1951 stevens creek blvd","city":"mackay","state":"australian capital territory","postcode":6745},"email":"clifton.rogers@example.com","login":{"username":"bigswan893","password":"marino13","salt":"DwhIIClT","md5":"7eea19c392c4706375ac8b5a1a7e199d","sha1":"00c83c8269cfee2cfc7900664680b3a9ae1b07ce","sha256":"7043267874332ea1c82436171c38c794e26da3ddd238970cfd3d80cb60239d70"},"dob":"1986-12-03 06:26:49","registered":"2009-06-15 07:17:19","phone":"02-1536-1265","cell":"0415-542-782","id":{"name":"TFN","value":"920430250"},"picture":{"large":"https://randomuser.me/api/portraits/men/12.jpg","medium":"https://randomuser.me/api/portraits/med/men/12.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/12.jpg"},"nat":"AU"},{"gender":"female","name":{"title":"miss","first":"mélina","last":"leclerc"},"location":{"street":"7997 rue du dauphiné","city":"boulogne-billancourt","state":"landes","postcode":61394},"email":"mélina.leclerc@example.com","login":{"username":"bluetiger571","password":"sparta","salt":"8OQDxGRr","md5":"1fe85d64f2a63082ec82dcb4ecd0b47d","sha1":"fa6354cc888789857f5313e7a04f29ea1f4a6be2","sha256":"388a79b91f5205b641ff7218941f970a20e650081c5d25ce1254559297126f6b"},"dob":"1976-11-22 20:47:25","registered":"2004-06-22 05:50:22","phone":"04-09-80-29-15","cell":"06-39-18-16-10","id":{"name":"INSEE","value":"2761005564250 73"},"picture":{"large":"https://randomuser.me/api/portraits/women/56.jpg","medium":"https://randomuser.me/api/portraits/med/women/56.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/56.jpg"},"nat":"FR"},{"gender":"female","name":{"title":"ms","first":"eduarda","last":"alves"},"location":{"street":"4343 rua carlos gomes","city":"resende","state":"acre","postcode":13174},"email":"eduarda.alves@example.com","login":{"username":"orangegoose208","password":"wrinkle1","salt":"dUe8aDon","md5":"93c07f14c009a63e023fab160608d7d7","sha1":"7fff0698d8b2e2a96ebffa0ce73cc790cae91b71","sha256":"3099b01b38381637cc055f4718438fd551e5ae423966edd66af010b92e1583d2"},"dob":"1984-04-06 14:13:00","registered":"2003-07-02 18:58:15","phone":"(25) 3067-2213","cell":"(71) 2342-8197","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/17.jpg","medium":"https://randomuser.me/api/portraits/med/women/17.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/17.jpg"},"nat":"BR"}],"info":{"seed":"a34298edeaf61837","results":3,"page":1,"version":"1.1"}};

class SidebarUserList extends Component {
  render() {
    return (
      <div>
        SidebarUserList
      </div>
    );
  }
}

export default SidebarUserList;
