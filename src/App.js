import {useState} from 'react'
import './App.css';
import Header from './Components/Header/Header';
import EditPage from './Components/Edit/EditPage';
import { useSelector } from 'react-redux';
import Footer from './Components/Footer/Footer';
import MakePost from './Components/Posts/MakePost';
import Post from './Components/Posts/Post';

function App() {
  const [isEdit, setEdit] = useState(false)
  const [isOpenPost, setOpen] = useState(false)
  const pending = useSelector((state) => state.user.pending)
  const error = useSelector((state) => state.user.error)
  return (
    <div className="App">
      {isEdit ? 
      (<EditPage setEdit={setEdit}/>) 
      : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit}/>
          <div className='post-container'>
            <Post/>
          </div>
          <Footer isOpenPost={isOpenPost} setOpen={setOpen}/>
        </>
      ) : (
        <>
          <Header setEdit={setEdit}/>
          <MakePost setOpen={setOpen}/>
        </>
      )}
      
      {/* && la pending true thi hien loading */}
      {pending && (<p className='loading'>Loading...</p>)} 
      {!isEdit && error && (
        <p className='error'>Error when fetching data from server!!!</p>
      )}
    </div>
  );
}

export default App;
