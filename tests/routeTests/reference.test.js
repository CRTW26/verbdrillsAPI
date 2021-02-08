process.env.NODE_ENV = 'test';
const app = require('../../index.js');
const supertest = require('supertest');
const request = supertest(app);
import db from '../../db';

describe('reference routers', () => {

    beforeEach(async () => {
        await db.query("CREATE TABLE verbs (infinitive VARCHAR(30), mood VARCHAR(30), tense VARCHAR(30), verb_english VARCHAR(45))");
        await db.query("ALTER TABLE verbs ADD COLUMN form_1s VARCHAR(30), ADD COLUMN form_2s VARCHAR(30), ADD COLUMN form_3s VARCHAR(30)");
        await db.query("ALTER TABLE verbs ADD COLUMN form_1p VARCHAR(30), ADD COLUMN form_2p VARCHAR(30), ADD COLUMN form_3p VARCHAR(30)");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Presente', 'I abandon, am abandoning', 'abandono', 'abandonas', 'abandona', 'abandonamos', 'abandonáis', 'abandonan')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Futuro', 'I will abandon', 'abandonaré', 'abandonarás', 'abandonará', 'abandonaremos', 'abandonaréis', 'abandonarán')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Imperfecto', 'I was abandoning, used to abandon, abandoned', 'abandonaba', 'abandonabas', 'abandonaba', 'abandonábamos', 'abandonabais', 'abandonaban')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Pretérito', 'I abandoned', 'abandoné', 'abandonaste', 'abandonó', 'abandonamos', 'abandonasteis', 'abandonaron')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Condicional', 'I would abandon', 'abandonaría', 'abandonarías', 'abandonaría', 'abandonaríamos', 'abandonaríais', 'abandonarían')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Presente perfecto', 'I have abandoned', 'he abandonado', 'has abandonado', 'ha abandonado', 'hemos abandonado', 'habéis abandonado', 'han abandonado')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Futuro perfecto', 'I will have abandoned', 'habré abandonado', 'habrás abandonado', 'habrá abandonado', 'habremos abandonado', 'habréis abandonado', 'habrán abandonado')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Pluscuamperfecto', 'I had abandoned', 'había abandonado', 'habías abandonado', 'había abandonado', 'habíamos abandonado', 'habíais abandonado', 'habían abandonado')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Pretérito anterior', 'I had abandoned', 'hube abandonado', 'hubiste abandonado', 'hubo abandonado', 'hubimos abandonado', 'hubisteis abandonado', 'hubieron abandonado')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Indicativo', 'Condicional perfecto', 'I would have abandoned', 'habría abandonado', 'habrías abandonado', 'habría abandonado', 'habríamos abandonado', 'habríais abandonado', 'habrían abandonado')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Subjuntivo', 'Presente', 'I abandon, am abandoning', 'abandone', 'abandones', 'abandone', 'abandonemos', 'abandonéis', 'abandonen')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Subjuntivo', 'Imperfecto', 'I abandoned, was abandoning', 'abandonara', 'abandonaras', 'abandonara', 'abandonáramos', 'abandonarais', 'abandonaran')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Subjuntivo', 'Futuro', 'I will abandon', 'abandonare', 'abandonares', 'abandonare', 'abandonáremos', 'abandonareis', 'abandonaren')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Subjuntivo', 'Presente perfecto', 'I have abandoned, abandoned', 'haya abandonado', 'hayas abandonado', 'haya abandonado', 'hayamos abandonado', 'hayáis abandonado', 'hayan abandonado')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Subjuntivo', 'Futuro perfecto', 'I will have abandoned', 'hubiere abandonado', 'hubieres abandonado', 'hubiere abandonado', 'hubiéremos abandonado', 'hubiereis abandonado', 'hubieren abandonado')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Subjuntivo', 'Pluscuamperfecto', 'I had abandoned', 'hubiera abandonado', 'hubieras abandonado', 'hubiera abandonado', 'hubiéramos abandonado', 'hubierais abandonado', 'hubieran abandonado')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Imperativo Afirmativo', 'Presente', 'Abandon! Don''t abandon!', '', 'abandona', 'abandonad', '', 'abandone', 'abandonen')");
        await db.query("INSERT INTO verbs (infinitive, mood, tense, verb_english, form_1s, form_2s, form_3s, form_1p, form_2p, form_3p) VALUES('abandonar', 'Imperativo Negativo', 'Presente', 'Abandon! Don''t abandon!', '', 'no abandones', 'no abandonéis', '', 'no abandone', 'no abandonen')");
    });

    afterEach(async () => {
        await db.query("DROP TABLE verbs");
    });

    afterAll(async () => {
        db.end();
    });

    test('GET /reference/abandonar', async () => {
        const response = await request.get('/reference/abandonar/');
        // console.log(response.body);
        expect(response.body.length).toEqual(18);
        expect(response.statusCode).toBe(200);
    });
})