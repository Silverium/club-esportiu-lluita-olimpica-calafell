// Renders the Open Graph image used on the home page

export const width = 1200
export const height = 630

export function OpenGraphImage(props: { title: string }) {
  const { title } = props
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        backgroundColor: 'white',
        backgroundImage:
          'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
        backgroundSize: '100px 100px',
        backgroundPosition: '0 -8px, 0 -8px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/favicon/safari-pinned-tab.svg"
          alt="Logo"
          style={{
            height: 200,
            width: 200,
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          fontStyle: 'normal',
          color: 'black',
          marginTop: 0,
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
        }}
      >
        <b style={{ background: '#fff' }}>{title}</b>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      />
    </div>
  )
}
