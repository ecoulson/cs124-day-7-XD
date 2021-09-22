import './App.css';
import { useState, useEffect } from 'react';

const data = [
  {
    id: 512,
     name: "Neil Rhodes",
     email: "rhodes@hmc.edu",
     phone: "(909) 555-1212"
   },
  {
    id: 787,
     name: "Barack Obama",
     email: "ex-prez@whitehouse.gov",
     phone: "(312) 555-1212"
   }
];

function ContactTable(props) {
  const [rowSelected, setRowSelected] = useState(null);

  useEffect(() => {
    console.log(rowSelected)
  }, [rowSelected])

  return <table className="contactTable"><tbody>
      {props.contacts.map(contact => 
        <Contact  onClickCallback={(e) => {
                                    setRowSelected(e.target.id == rowSelected ? null : e.target.id)
                                  }} 
                  key={contact.id} 
                  name={contact.name}
                  email={contact.email} 
                  phone={contact.phone} 
                  id={contact.id}
                  isSelected={contact.id == rowSelected} />
      )}
    </tbody></table>;
}

function Contact(props) {
  // onClick={e => console.log(e.target.id)}
  return <tr 
          onClick={props.onClickCallback} 
          className={`contactRow ${props.isSelected ? "rowSelected" : ""}`}>
            <td className="contactName" id={props.id} >
              {props.name}
            </td>
            <td className="contactEmail" id={props.id}>
              {props.email}
            </td>
            <td id={props.id}>
              {props.phone}
            </td>
        </tr>
}

function App() {
  return (
    <>
      <h1>People</h1>
      <ContactTable contacts={data} />
    </>
  );
}

export default App;
