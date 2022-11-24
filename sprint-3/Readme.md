Blogs {
_id :ObjectId
Title:
Body:
Category_ids: [
ObjectIds()
    ]
}
Users : {
_id : ObjectId,
Name: Nrupul Dev
Email: String
social_profile : {
linkedIn:
facebook:
Twiter:
Github:
Instagram:
    }
Addresses: [
        {
Line1:
City:
State:
PinCode:
        }
    ]
Blog_id : [
ObjectId()
    ]
}
Category: {
_id : ObjectId()
Name:
}
Comments: {
_id: ObjectId()
Blog_id: ObjectId
User_id: ObjectId
Message:
Rating
}
Likes: {
_id: ObjectId()
User_id: ObjectId()
Blog_id: ObjectId()
Emoji:
}


<----------------------------------------------------------------------------------------->
<----------------------------------------------------------------------------------------->


Rlations:-
 
 1.  Users to Blogs =>  one to many
 2.  Blogs to Comments => one to many
 3.  Blogs to Likes => one to many
