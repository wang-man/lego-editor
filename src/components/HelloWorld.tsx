interface HelloProps {
  msg: string
}
const HelloWorld = (props: HelloProps) =>{
  return <h1>{props.msg}</h1>
}

HelloWorld.props = ['msg']

export default HelloWorld;