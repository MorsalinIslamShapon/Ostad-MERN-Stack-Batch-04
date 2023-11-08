//Use Short Hand If Else in any JSX.
/*
const Optional = () => {
    let marks = 31;
    return (
        <div>
            {marks>=80?<h1>Brillent Result</h1> :<h1>Not Brillent Result</h1>}
        </div>
    );
};

export default Optional;
*/


//Show how Loop works in JSX
/*
const App = () => {
    const conuntry =['Bangladesh', 'India', 'Pakistan','Srilanka','England','SouthAfrica']
    return (
      <div>
        <ol>
          {
            conuntry.map((item,i)=>{
              return <li key={i.toString()}>{item}</li>
            })
          }
        </ol>
      </div>
    );
  };
  
  export default App;
  */


  //Show how JSX Conditional Rendering Using Ternary Operator works

  const App = () => {
    let status = false;
    return (
      <div>
        {
          status?
          <button>LogOut Btn</button>
          :
          <button>LogIn Btn</button>
        }
      </div>
    );
  };
  
  export default App;
 