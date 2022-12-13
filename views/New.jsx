const React = require("react");
const DefaultLayout = require("../views");

class New extends React.Component {
    render() {
      return (
        <DefaultLayout title='New Pokemon Page'>
          
          <form action='/pokemon' method='post'>
            <fieldset>
              <legend>Create a New Pokemon</legend>
              <label>
                NAME:
                <input type='text' name='name' placeholder='enter fruit name' />
              </label>
              
            </fieldset>
            <input type='submit' value='create New Pokemon' />
          </form>
        </DefaultLayout>
      );
    }
  }
  
  module.exports = New;