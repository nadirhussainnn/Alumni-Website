import React, {useState, useEffect} from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import Axios from 'axios'

const URL = "http://localhost:5000/api";

export function SearchAlumniMember() {

  const[search, setSearch]=useState()
  function searchHandler(data){
    setSearch(data)
  }
  return (

    <div>
      <div class="ui mt-4 grid p-4">
        <div class="three wide column"></div>
        <div class="eleven wide column">
          <h1>Search Alumni</h1>
          <hr />

          <SearchAlumni handleSearch={searchHandler}/>
   
        </div>
        <div class="one wide column"></div>
      </div>
      
      <DisplayAllAlumniMembers cmsId={search}/>
    </div>
  )
}

const SearchAlumni = (props) => {


  const[search, setSearch]=useState()

  function handleSearch(evt){
    const{name, value}=evt.target 
    props.handleSearch(value)
    setSearch(value)
  }

  return (
    <div>
      <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" value={search} placeholder="Search countries..." onChange={handleSearch}/>
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>
    </div>
  );
};


export function DisplayAllAlumniMembers(props) {
  console.log(props.cmsId)
  return (
    <div class="container">
      <div class="ui grid mt-4 ms-2">
        <div class="two wide column"></div>
        <div class="eleven wide column">
          <h1>All Alumni Members</h1>
          <hr />
          <Member cmsId={props.cmsId}/>
        </div>
      </div>

      <div class="three wide column"></div>
    </div>
  );
}

const Member = (props) => {

  const [members, setMembers] = useState([]);
  
  useEffect(() => {
    fetch(`${URL}/loadAllMembers`)
      .then((resp) => resp.json())
      .then((result) => {
        const { data, image } = result;
        data.forEach((element, index) => {
            data[index]['profileImage']=image[index]
        });
        setMembers(data)
      });
  }, [props.cmsId]);

    
    Axios.post(`${URL}/searchAlumni`,{cms:props.cmsId}).then(result=>{
      //Add image to object as well and operate on object  
      if(result.data.data[0]){
        result.data.data[0]['profileImage']=result.data.image[0]
        const filteredArray = members.filter((member) => {
          return member.cmsId === props.cmsId;
        });
        
        setMembers(filteredArray);
         }
      }
    )

  function handleDeleteMember(cmsId) {

    Axios.post(`${URL}/deleteAlumniMember`,{cms:cmsId}).then(data=>{
      console.log(data)
    
    })
    
    const filteredArray = members.filter((member) => {
      return member.cmsId !== cmsId;
    });
    
    setMembers(filteredArray);
  }

  return (
    <div class="ui three cards">
      {members.map((itm) => {
        return (
          <div class="ui card shadow-lg">
            <div class="content">
              <img src={itm.profileImage} class="ui right floated image" width="100%" height="150px" />
              <div class="header">{itm.fullName}</div>
              <div >{itm.cmsId}</div>
              <div >{itm.email}</div>
              <div class="description">{itm.description}</div>
            </div>
            <div class="extra content">
              <div class="ui two buttons">
                <button
                  class="ui red basic button"
                  onClick={() => {
                    handleDeleteMember(itm.cmsId);
                  }}
                >
                  <Icon name="user delete" size="large"></Icon>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};




// function exampleReducer(state, action) {
//   switch (action.type) {
//     case 'OPEN_MODAL':
//       return { open: true, dimmer: action.dimmer }
//     case 'CLOSE_MODAL':
//       return { open: false }
//     default:
//       throw new Error()
//   }
// }

// function ModalExampleDimmer() {
//   const [state, dispatch] = React.useReducer(exampleReducer, {
//     open: false,
//     dimmer: undefined,
//   })
//   const { open, dimmer } = state

//   return (
//     <div>
//       <Button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Search By CmsID</Button>
//       <Button
//         onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'inverted' })}
//       >
//         Search By Name
//       </Button>
//       <Button
//         onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
//       >
//         Search By Email
//       </Button>
//       <Modal
//         size='mini'
//         dimmer={dimmer}
//         open={open}
//         onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
//       >
//         <Modal.Header>Search Alumni Member</Modal.Header>
//         <Modal.Content>
//           <SearchAlumni />
//         </Modal.Content>
//         <Modal.Actions>
//           <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
//             Disagree
//           </Button>
//           <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
//             Agree
//           </Button>
//         </Modal.Actions>
//       </Modal>
//     </div>
   
//   )
// }


