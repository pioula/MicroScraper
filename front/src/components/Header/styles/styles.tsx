const styles = {
    header: {
        position: 'fixed' as 'fixed',
        backgroundColor: '#696969',
        color: '#FFFFFF',
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        top: 0,
        zIndex: 1000,
        display: 'flex' as 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between'
    },
    buttons: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    nav: {
        display: 'flex' as 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between',
        width: 400
    },
    link: {
        textDecoration: 'none',
    },
    logo: {
        color: '#FFFFFF'
    }
}

export default styles;