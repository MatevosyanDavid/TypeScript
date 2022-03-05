(function () {
  interface Info {
    desc: string;
    isActive: boolean;
  }

  interface Tags {
    name: string;
    age: number;
  }

  interface IUser {
    userId: number;
    id: number;
    title: String;
    info: Info;
    tags: Tags[];
  }

  function getData(): IUser {
    return {
      userId: 1,
      id: 1,
      title: 'User Data',
      info: {
        desc: 'Lorem ipsum',
        isActive: true,
      },
      tags: [
        {
          name: 'David Matevosyan',
          age: 33,
        },
      ],
    };
  }

  const data = getData();
})();
