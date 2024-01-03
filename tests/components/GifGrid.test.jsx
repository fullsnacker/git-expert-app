import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        });

        render(<GifGrid category={ category }/>);
        // screen.debug();

        expect( screen.getAllByText('Cargando...') );
        expect( screen.getAllByText( category ) );

     });

     test('debe de mostrar items cuando se cargan las imagenes', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: 'DEF',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        }
    ];

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        });

        render(<GifGrid category={ category }/>);

        // screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);




      })
 })