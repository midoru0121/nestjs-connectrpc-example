import { useCallback, useState } from 'react'
import './App.css'

import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

import { DemoService } from "@repo/connectrpc"

const transport = createConnectTransport({
  baseUrl: "http://localhost:3000",
});

const client = createPromiseClient(DemoService, transport);
function App() {
  const [msg, setMsg] = useState("");

  const onCreate = useCallback(async () => {
    const res = await client.createUser({
      name: "hello",
      email: "hello@example.com"
    });
    setMsg(res.message)
  }, [])

  const onGet = useCallback(async () => {
    const res = await client.getUser({});
    setMsg(res.name)
  }, [])
  
  const onUpdate = useCallback(async () => {
    const res = await client.updateUser({
      email: "hello@example.com",
      password: "hogehoge"
    });
    setMsg(res.message)
  }, [])

  const onDelete = useCallback(async () => {
    const res = await client.deleteUser({
      email: "hello@example.com",
      password: "hogehoge"
    });
    setMsg(res.message)
  }, [])

  return (
    <>
      <h1>{msg}</h1>
      <button type="button" onClick={onCreate}>Create</button>
      <button type="button" onClick={onGet}>Get</button>
      <button type="button" onClick={onUpdate}>Update</button>
      <button type="button" onClick={onDelete}>Delete</button>

    </>
  )
}

export default App
