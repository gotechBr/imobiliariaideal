package Class;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "imovel")
public class Imovel {

    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "rua")
    private String rua;
    @Column(name = "numero")
    private String numero;
    @Column(name = "cep")
    private String cep;
    @Column(name = "uf")
    private String uf;
    @Column(name = "quartos")
    private int quartos;
    @Column(name = "suites")
    private int suites;
    @Column(name = "tamanho")
    private int tamanho;
    @Column(name = "descricao")
    private String descricao;

}
