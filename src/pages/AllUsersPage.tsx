import Body from "../components/Body";

export default function AllUsersPage({ children }: { children: JSX.Element | JSX.Element[]}) {
  
  return (
    <Body sidebar>
      { children }
    </Body>
  )
}
