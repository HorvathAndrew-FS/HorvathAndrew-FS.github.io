class API {
  constructor() {}

  static getData() {
    //prettier-ignore
    const apiPath = "https://cyan-daffy-waiter.glitch.me/api";
    const listParameter = "/lists";
    const itemsParameter = "/items";
    const token = "?accessToken=5b1064585f4ab8706d275f90";

    const url = `${apiPath}${listParameter}${token}`;
    const urlPost = `${apiPath}${itemsParameter}${token}`;

    // const loader = document.querySelector("#loading");

    // // showing loading
    // function displayLoading() {
    //   // let div = document.createElement("div");
    //   // document.querySelector("main").append(div);
    //       loader.classList.add("display");
    //   // to stop loading after some time
    //     setTimeout(() => {
    //       loader.classList.remove("display");
    //     }, 5000);
    // }

    // // hiding loading 
    // function hideLoading() {
    // loader.classList.remove("display");
    // }

    const optionGet = {
      method: "GET",
    };

    // displayLoading();
    //seriously I commented it out already stupid browser!

    fetch(url, optionGet)
      .then((response) => {
        if (response.ok) {
          // hideLoading();
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        const evt = new Event("data_received");
        evt.kanban = data;
        document.dispatchEvent(evt);
      })
      .catch((err) => {
        console.log("an error occurred", err);
      });
  }

  static postData(e, listId, sectionId) {
    e.preventDefault();

    const apiPath = "https://cyan-daffy-waiter.glitch.me/api";
    const listParameter = "/lists";
    const itemsParameter = "/items";
    const token = "?accessToken=5b1064585f4ab8706d275f90";

    const url = `${apiPath}${listParameter}${token}`;
    const urlPost = `${apiPath}${itemsParameter}${token}`;

    const dataToSend = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      dueDate: document.querySelector("#dueDate").value,
      listId: listId,
    };

    const optionPost = {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "content-type": "application/json",
      },
    };

    fetch(urlPost, optionPost)
      .then((response) => response.json())

      .then((data) => {
        document.querySelector("#modal").remove();
        let container = document.querySelector(`#${sectionId}`);

        let addTask = new Task(
          data.id,
          data.title,
          data.description,
          data.dueDate,
          data.listId
        ).createTask();

        document.querySelector(`#${sectionId}`).append(addTask);
      })

      .catch((err) => {
        console.log("an error occurred", err);
      });
  }
}
