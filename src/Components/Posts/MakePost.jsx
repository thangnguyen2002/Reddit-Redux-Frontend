import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../Redux/postSlice";
import Input from "../InputFields/Input";
import "./post.css"

const MakePost = (props) => {
    const {setOpen} = props
    const [title, setTitle] = useState("Add a title")
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"]
    const dispatch = useDispatch()
    const [desc, setDesc] = useState("Add some description")
    const [selectedIdx, setSelectedIdx] = useState(0)
    const handlePost = () => {
        setOpen(false)
        const newPost = {
            title: title,
            description: desc,
            tag: selectedIdx,
        }
        //[post1, post2, post3,...]
        dispatch(createPost(newPost))
    }
    return ( 
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    Post
                </p>
            </div> 
            <Input data={title} inputType="textarea" setData={setTitle} label="Title" classType="makepost-title"/>
            <Input data={desc} inputType="textarea" setData={setDesc} label="Description" classType="makepost-desc"/>
            <label>Tags</label>
                <div>
                    <div className="makepost-tags">
                        {tags.map((tag, idx) => {
                            return (
                                <button key={idx} className={`${selectedIdx === idx ? `makepost-tags-selected` : `makepost-tags-${tag}`}`} onClick={()=>setSelectedIdx(idx)}>{tag}</button>
                            )
                        })}
                    </div>                    
                </div>
        </section>
     );
}
 
export default MakePost;