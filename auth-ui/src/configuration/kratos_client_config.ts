import { Configuration, FrontendApi } from "@ory/client";

const frontend = new FrontendApi(
    new Configuration({
      basePath: "http://localhost:4433",
      baseOptions: {
        withCredentials: true,
      },
    }),
  )

  export default frontend;