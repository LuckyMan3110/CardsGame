import { useEffect, useState, useRef } from "react";
import proavatar from '../../../../Assets/images/avatar/man.png'
import { AiFillFileAdd } from "react-icons/ai";

const ProfileAvatar = (props) => {
    const [avatarSrc, setAvatarSrc] = useState("");
    const [position, setPosition] = useState({ x: -20, y: -20 });
    const [avatarsize, setAvatarSize] = useState(300);
    const [mousedown, setMousedown] = useState(false);
    const canvasRef = useRef(null);
    
    const handleChange = async (e) => {
        var file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setAvatarSrc(reader.result);
            drawImage(reader.result);
        }
    };
    const handleMouseDown = (e) => {
        e.preventDefault();
        setMousedown(true);
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        canvasRef.current.dragging = true;
        canvasRef.current.offsetX = x - position.x;
        canvasRef.current.offsetY = y - position.y;
    };
    const handleMouseMove = (e) => {
        if (mousedown) {
            if (canvasRef.current.dragging) {
                const rect = canvasRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const newX = x - canvasRef.current.offsetX;
                const newY = y - canvasRef.current.offsetY;
                setPosition({ x: newX, y: newY });
                drawImage();
            }
        }
    };
    const handleMouseUp = (e) => {
        setMousedown(false);
        canvasRef.current.dragging = false;
        canvasRef.current.offsetX = 0;
        canvasRef.current.offsetY = 0;
    };
    const handleMouseLeave = (e) => {
        if (mousedown) {
            canvasRef.current.dragging = false;
            canvasRef.current.offsetX = 0;
            canvasRef.current.offsetY = 0;
        }
    };
    const handleSize = (e) => {
        const value = e.currentTarget.value;
        setAvatarSize(value);
        drawImage();
    };
    const drawImage = (image) => {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        const img = new Image();
        if(image){img.src = image;}
        else{img.src = avatarSrc; }
        ctx.drawImage(img, position.x, position.y, avatarsize, img.height / img.width * avatarsize);
    }
    useEffect(() => {
        drawImage();
    }, [avatarSrc, avatarsize]);
    return (
        <div>
            <h1 className="font-blod text-2xl max-sm:text-xl">Upload and manipulate an image</h1>
            <div className="my-4">
                <label className="flex w-1/2 mx-auto px-4 py-2 bg-meta-8 rounded-xl hover:bg-meta-6" htmlFor="upload_avatar"><AiFillFileAdd className="text-2xl"/>{avatarSrc != proavatar ? "Change file" : "Load file"}</label>
                <input type="file" id="upload_avatar" className="hidden" accept="image/*" onChange={handleChange} />
            </div>
            <input type="range" min="250" max="500" value={avatarsize} onInput={handleSize} />
            <canvas
                ref={canvasRef}
                width="150"
                height="150"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className="bg-meta-9 rounded-full mx-auto"
            ></canvas>
            <button className="my-4 px-6 py-2 rounded-xl bg-stone-50 hover:bg-stone-100" onClick={() => { props.mainsrc(canvasRef.current.toDataURL()); props.close(true); }}>Save Profile</button>
        </div>
    )
}
export default ProfileAvatar;