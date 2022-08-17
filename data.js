const currentUserObject = {
  "currentUser": {
    "image": { 
      "png": "./images/avatars/image-juliusomo.png",
      "webp": "./images/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  }
}

const commentsArray = [
  {
    "id": 1,
    "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    "createdAt": "1 month ago",
    "score": 12,
    "image": "./images/avatars/image-amyrobson.png",
    "username": "amyrobson",
    "reply": false
    }
,
  {
    "id": 2,
    "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    "createdAt": "2 weeks ago",
    "score": 5,
     "image": "./images/avatars/image-maxblagun.png",
     "username": "maxblagun",
     "reply": false
    }
]


const repliesArray = [
{
  "id": 3,
  "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
  "createdAt": "1 week ago",
  "score": 4,
  "image": "./images/avatars/image-ramsesmiron.png",
  "username": "ramsesmiron",
  "reply": true
  },
{
  "id": 4,
  "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
  "createdAt": "2 days ago",
  "score": 2,
  "replyingTo": "ramsesmiron",
  "image": "./images/avatars/image-juliusomo.png",
  "username": "juliusomo",
  "reply": true
  }
]

