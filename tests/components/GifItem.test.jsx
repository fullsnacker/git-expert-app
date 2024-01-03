const { render, screen } = require("@testing-library/react")
const { GifItem } = require("../../src/components/GifItem")

describe('Pruebas en GifItem', () => { 

    const title = 'Saitama';
    const url = 'https://saitama.io/';

    test('Debe hacer match con el snapshot', () => { 


        const container = render( <GifItem title={ title } url={ url } /> );

        expect( container ).toMatchSnapshot();
        
     });

     test('Debe mostrar la imagen con el url y el alt indicado', () => { 
        
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();

        const {src, alt } = screen.getByRole('img'); 
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
      })
 })