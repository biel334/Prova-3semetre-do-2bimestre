--
-- PostgreSQL database dump
--

\restrict fwyzcC1CXUiIWjiRuAmHh6m6FLhkygWgvY8oFGfDzSYoCOAFxcdhwp8aqljiEeV

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

-- Started on 2026-06-16 19:06:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16454)
-- Name: alunos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alunos (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    email character varying(100),
    curso character varying(100)
);


ALTER TABLE public.alunos OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16453)
-- Name: alunos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.alunos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.alunos_id_seq OWNER TO postgres;

--
-- TOC entry 5057 (class 0 OID 0)
-- Dependencies: 219
-- Name: alunos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.alunos_id_seq OWNED BY public.alunos.id;


--
-- TOC entry 222 (class 1259 OID 16463)
-- Name: materias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.materias (
    id integer NOT NULL,
    nome character varying(100) NOT NULL
);


ALTER TABLE public.materias OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16462)
-- Name: materias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.materias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.materias_id_seq OWNER TO postgres;

--
-- TOC entry 5058 (class 0 OID 0)
-- Dependencies: 221
-- Name: materias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.materias_id_seq OWNED BY public.materias.id;


--
-- TOC entry 226 (class 1259 OID 16486)
-- Name: notas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notas (
    id integer NOT NULL,
    aluno_id integer,
    materia_id integer,
    nota numeric(4,2)
);


ALTER TABLE public.notas OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16485)
-- Name: notas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.notas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.notas_id_seq OWNER TO postgres;

--
-- TOC entry 5059 (class 0 OID 0)
-- Dependencies: 225
-- Name: notas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.notas_id_seq OWNED BY public.notas.id;


--
-- TOC entry 228 (class 1259 OID 16504)
-- Name: presencas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.presencas (
    id integer NOT NULL,
    aluno_id integer,
    data_aula date,
    presente boolean
);


ALTER TABLE public.presencas OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16503)
-- Name: presencas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.presencas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.presencas_id_seq OWNER TO postgres;

--
-- TOC entry 5060 (class 0 OID 0)
-- Dependencies: 227
-- Name: presencas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.presencas_id_seq OWNED BY public.presencas.id;


--
-- TOC entry 224 (class 1259 OID 16472)
-- Name: professores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professores (
    id integer NOT NULL,
    nome character varying(100) NOT NULL,
    email character varying(100),
    materia_id integer
);


ALTER TABLE public.professores OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16471)
-- Name: professores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.professores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.professores_id_seq OWNER TO postgres;

--
-- TOC entry 5061 (class 0 OID 0)
-- Dependencies: 223
-- Name: professores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.professores_id_seq OWNED BY public.professores.id;


--
-- TOC entry 4876 (class 2604 OID 16457)
-- Name: alunos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos ALTER COLUMN id SET DEFAULT nextval('public.alunos_id_seq'::regclass);


--
-- TOC entry 4877 (class 2604 OID 16466)
-- Name: materias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.materias ALTER COLUMN id SET DEFAULT nextval('public.materias_id_seq'::regclass);


--
-- TOC entry 4879 (class 2604 OID 16489)
-- Name: notas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notas ALTER COLUMN id SET DEFAULT nextval('public.notas_id_seq'::regclass);


--
-- TOC entry 4880 (class 2604 OID 16507)
-- Name: presencas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.presencas ALTER COLUMN id SET DEFAULT nextval('public.presencas_id_seq'::regclass);


--
-- TOC entry 4878 (class 2604 OID 16475)
-- Name: professores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professores ALTER COLUMN id SET DEFAULT nextval('public.professores_id_seq'::regclass);


--
-- TOC entry 5043 (class 0 OID 16454)
-- Dependencies: 220
-- Data for Name: alunos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alunos (id, nome, email, curso) FROM stdin;
1	Gabriel	gabriel@email.com	Informática
2	João	joao@email.com	Administração
3	Maria	maria@email.com	Informática
4	Pedro	pedro@email.com	Administração
5	Lucas	lucas@email.com	Informática
6	Ana	ana@email.com	Administração
7	Bruno	bruno@email.com	Informática
8	Carla	carla@email.com	Administração
\.


--
-- TOC entry 5045 (class 0 OID 16463)
-- Dependencies: 222
-- Data for Name: materias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.materias (id, nome) FROM stdin;
1	Matemática
2	Português
3	História
4	Geografia
5	Ciências
6	Inglês
7	Educação Física
8	Informática
\.


--
-- TOC entry 5049 (class 0 OID 16486)
-- Dependencies: 226
-- Data for Name: notas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notas (id, aluno_id, materia_id, nota) FROM stdin;
1	1	1	9.50
2	2	2	8.00
3	3	3	7.50
4	4	4	9.00
5	5	5	8.50
6	6	6	7.00
7	7	7	10.00
8	8	8	9.20
\.


--
-- TOC entry 5051 (class 0 OID 16504)
-- Dependencies: 228
-- Data for Name: presencas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.presencas (id, aluno_id, data_aula, presente) FROM stdin;
1	1	2026-06-16	t
2	2	2026-06-16	t
3	3	2026-06-16	f
4	4	2026-06-16	t
5	5	2026-06-16	t
6	6	2026-06-16	f
7	7	2026-06-16	t
8	8	2026-06-16	t
\.


--
-- TOC entry 5047 (class 0 OID 16472)
-- Dependencies: 224
-- Data for Name: professores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professores (id, nome, email, materia_id) FROM stdin;
1	Carlos Silva	carlos@escola.com	1
2	Ana Souza	anasouza@escola.com	2
3	Marcos Lima	marcos@escola.com	3
4	Juliana Alves	juliana@escola.com	4
5	Fernanda Costa	fernanda@escola.com	5
6	Ricardo Souza	ricardo@escola.com	6
7	Paulo Mendes	paulo@escola.com	7
8	Lucas Pereira	lucasprof@escola.com	8
\.


--
-- TOC entry 5062 (class 0 OID 0)
-- Dependencies: 219
-- Name: alunos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alunos_id_seq', 8, true);


--
-- TOC entry 5063 (class 0 OID 0)
-- Dependencies: 221
-- Name: materias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.materias_id_seq', 8, true);


--
-- TOC entry 5064 (class 0 OID 0)
-- Dependencies: 225
-- Name: notas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.notas_id_seq', 8, true);


--
-- TOC entry 5065 (class 0 OID 0)
-- Dependencies: 227
-- Name: presencas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.presencas_id_seq', 8, true);


--
-- TOC entry 5066 (class 0 OID 0)
-- Dependencies: 223
-- Name: professores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.professores_id_seq', 8, true);


--
-- TOC entry 4882 (class 2606 OID 16461)
-- Name: alunos alunos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_pkey PRIMARY KEY (id);


--
-- TOC entry 4884 (class 2606 OID 16470)
-- Name: materias materias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.materias
    ADD CONSTRAINT materias_pkey PRIMARY KEY (id);


--
-- TOC entry 4888 (class 2606 OID 16492)
-- Name: notas notas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notas
    ADD CONSTRAINT notas_pkey PRIMARY KEY (id);


--
-- TOC entry 4890 (class 2606 OID 16510)
-- Name: presencas presencas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.presencas
    ADD CONSTRAINT presencas_pkey PRIMARY KEY (id);


--
-- TOC entry 4886 (class 2606 OID 16479)
-- Name: professores professores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professores
    ADD CONSTRAINT professores_pkey PRIMARY KEY (id);


--
-- TOC entry 4892 (class 2606 OID 16493)
-- Name: notas notas_aluno_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notas
    ADD CONSTRAINT notas_aluno_id_fkey FOREIGN KEY (aluno_id) REFERENCES public.alunos(id);


--
-- TOC entry 4893 (class 2606 OID 16498)
-- Name: notas notas_materia_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notas
    ADD CONSTRAINT notas_materia_id_fkey FOREIGN KEY (materia_id) REFERENCES public.materias(id);


--
-- TOC entry 4894 (class 2606 OID 16511)
-- Name: presencas presencas_aluno_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.presencas
    ADD CONSTRAINT presencas_aluno_id_fkey FOREIGN KEY (aluno_id) REFERENCES public.alunos(id);


--
-- TOC entry 4891 (class 2606 OID 16480)
-- Name: professores professores_materia_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professores
    ADD CONSTRAINT professores_materia_id_fkey FOREIGN KEY (materia_id) REFERENCES public.materias(id);


-- Completed on 2026-06-16 19:06:10

--
-- PostgreSQL database dump complete
--

\unrestrict fwyzcC1CXUiIWjiRuAmHh6m6FLhkygWgvY8oFGfDzSYoCOAFxcdhwp8aqljiEeV

