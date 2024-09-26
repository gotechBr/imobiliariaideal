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
i@Entity
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
    private double tamanho;
    @Column(name = "descricao")
    private String descricao;

    public Imovel(Long id, String rua, String numero, String cep, String uf, int quartos, int suites, double tamanho, String descricao) {
        this.id = id;
        this.rua = rua;
        this.numero = numero;
        this.cep = cep;
        this.uf = uf;
        this.quartos = quartos;
        this.suites = suites;
        this.tamanho = tamanho;
        this.descricao = descricao;
    }

    public Imovel () {}

}
