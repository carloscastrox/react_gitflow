import React from 'react';

export default function Componentalejo() {
    return (
        <>
            <style>{`
                .alejo-page {
                    display: grid;
                    place-items: center;
                    min-height: 100svh;
                    padding: 24px;
                    box-sizing: border-box;
                }

                .alejo-card {
                    width: min(100%, 360px);
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
                }

                .alejo-card h1 {
                    margin: 20px 0 8px;
                    font-size: 32px;
                }
            `}</style>

            <main className="alejo-page">
                <section className="alejo-card">
                    <img src="/yo.jpg" alt="Foto de Alejandro Mesa" />
                    <h1>Alejandro Mesa</h1>
                    <p>Número de ficha: 3494620</p>
                </section>
            </main>
        </>
    );
}