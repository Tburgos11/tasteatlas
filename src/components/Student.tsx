import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Data {
    apellidos: string;
    nombres: string;
    paralelo: string | number;
}

export default function Student({ apellidos, nombres, paralelo }: Data) {
    return (
        <>
            <Typography component="p" variant="h4">
                {/* PENDIENTE: Renderice los props apellidos y nombres */}
                {apellidos} {nombres}
            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>
                {/* PENDIENTE: Renderice el paralelo */}
                Paralelo #{paralelo}
            </Typography>
        </>
    )
}
