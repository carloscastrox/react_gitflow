import React from 'react';
import fotoAlejo from '../../assets/imgalejomesa.png';

export function Componentalejo() {
    return (
        <>
            <style>{`
                .alejo-page {
                    display: grid;
                    place-items: center;
                    min-height: 100svh;
                    padding: 24px;
                    box-sizing: border-box;
                    font-family: system-ui, -apple-system, sans-serif;
                }

                .alejo-card {
                    width: min(100%, 380px);
                    padding: 32px;
                    box-sizing: border-box;
                    text-align: center;
                    background: var(--bg, #fff);
                    border: 1px solid var(--border, #e5e4e7);
                    border-radius: 16px;
                    box-shadow: var(--shadow, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
                }

                .alejo-card img {
                    width: 180px;
                    height: 180px;
                    max-width: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 4px solid #ffffff;
                    outline: 2px solid #e5e4e7;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .alejo-card img:hover {
                    transform: scale(1.04);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
                }

                .alejo-card h1 {
                    margin: 20px 0 8px;
                    font-size: 30px;
                    color: #111;
                }

                .alejo-info {
                    margin: 8px 0 0;
                    color: #555;
                    font-size: 16px;
                    line-height: 1.5;
                }
            `}</style>

            <main className="alejo-page">
                <section className="alejo-card">
                    <img src={fotoAlejo} alt="Foto de Alejandro Mesa" />
                    <h1>Alejandro Mesa</h1>
                    <p className="alejo-info">Ficha: 3494620</p>
                    <p className="alejo-info">Salón: 703</p>
                </section>
            </main>
        </>
    );
}