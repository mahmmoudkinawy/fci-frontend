export interface Post {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  postImageUrl?: string;
  isLikedByCurrentUser:boolean;
  userId: string;
  ownerId:string;
  ownerName:string;
  ownerImageUrl:string;
}
