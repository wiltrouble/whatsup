export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Status: undefined;
  Camera: undefined;
  Calls: undefined;
  Chats: undefined;
  Settings: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUrl: String;
}

export type Message = {
  id: String;
  content: string;
  createAt: string;
}

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
}
