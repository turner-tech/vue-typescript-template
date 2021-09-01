export default {
  name: "RandomUserTransformer",
  convertUserFrom(currentUsers: any, newUsers: any): any {
    try {
      newUsers.forEach(
        (user: any) =>
          (currentUsers = [
            ...currentUsers,
            {
              gender: user.gender,
              name: {
                title: user.name.title,
                first: user.name.first,
                last: user.name.last,
              },
              email: user.email,
              login: {
                uuid: user.login.uuid,
              },
              phone: user.phone,
              cell: user.cell,
              picture: {
                large: user.picture.large,
                medium: user.picture.medium,
                thumbnail: user.picture.thumbnail,
              },
            },
          ]),
      );
      return currentUsers;
    } catch (error) {
      console.log("Error forming data object: " + error);
      return [...currentUsers];
    }
  },
};
